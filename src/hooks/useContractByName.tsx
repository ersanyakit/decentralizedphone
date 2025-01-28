import { useEffect, useState } from 'react';
import WorldDiamondABI from "../constants/abi/WorldDiamond.json";
import ERC20ABI from "../constants/abi/ERC20.json";
import { BrowserProvider, Contract, ethers, isAddress, JsonRpcProvider } from 'ethers';
import { createPublicClient, getContract, http, parseEther, parseUnits } from 'viem';
import { avalanche, chiliz, hardhat, spicy } from 'viem/chains';
import { MultiContractConfig, NetworkClient, TCustomContract } from '@/types/web3.types';
import { AvaxMainnet, ChilizMainnet, ChilizSpicyTestNet, HardhatTestnet } from '@/utils/web3/chains';
import { useChainId } from '@/context/ChainIdProvider';

const DiamondAddress = '0x3B86091793D1f732BBfCCF1269e471d5DF4eb350';

const ContractList: MultiContractConfig = {
    "DIAMOND": {
        abi: WorldDiamondABI.abi,
        contracts: {
            88888: {
                address: DiamondAddress,
            },
            31337: {
                address: "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512",
            },
            43114: {
                address: DiamondAddress,
            },
        },
    },
    "TOKEN": {
        abi: ERC20ABI.abi,
        contracts: {
            88888: {
                address: "0x570e91fe0D25D46C5e0C83aF6bc95afB0072C321",
            },
            43114: {
                address: "0x570e91fe0D25D46C5e0C83aF6bc95afB0072C321",
            },
            31337: {
                address: "0x570e91fe0D25D46C5e0C83aF6bc95afB0072C321",
            },
        },
    },
};

export const useContractByName = (contractName: string) => {
    const chainId = useChainId(); // ChainId'yi context'ten alıyoruz
    const [contract, setContract] = useState<TCustomContract | null>(null);

    useEffect(() => {
        if (!chainId) {
            console.error("Chain ID is not available.");
            return;
        }

        const contractGroup = ContractList[contractName];

        if (!contractGroup) {
            console.error(`Unknown contract name: ${contractName}`);
            return;
        }

        const contractAddress = contractGroup.contracts[chainId]?.address;

        if (!contractAddress) {
            console.error(`Contract address not found for chainId: ${chainId}`);
            return;
        }

        setContract({
            abi: contractGroup.abi,
            address: contractAddress,
        });
    }, [contractName, chainId]); // contractName veya chainId değişirse tekrar çalışır

    return contract;
};



export const chilizClient = createPublicClient({
    batch: {
        multicall: true,
    },
    cacheTime: 10_000,
    pollingInterval: 10_000,
    chain: chiliz,
    transport: http(ChilizMainnet.rpcUrl),
});

export const chilizSpicyClient = createPublicClient({
    batch: {
        multicall: true,
    },
    cacheTime: 10_000,
    pollingInterval: 10_000,
    chain: spicy,
    transport: http(ChilizSpicyTestNet.rpcUrl),
});


export const avaxClient = createPublicClient({
    batch: {
        multicall: true,
    },
    cacheTime: 10_000,
    pollingInterval: 10_000,
    chain: avalanche,
    transport: http(AvaxMainnet.rpcUrl),
});


export const hardhatClient = createPublicClient({
    batch: {
        multicall: true,
    },
    cacheTime: 10_000,
    pollingInterval: 10_000,
    chain: hardhat,
    transport: http(HardhatTestnet.rpcUrl),
});


export const NETWORKS: Record<string, NetworkClient> = {
    chiliz: { client: chilizClient, network: ChilizMainnet },
    spicy: { client: chilizSpicyClient, network: ChilizSpicyTestNet },
    hardhat: { client: hardhatClient, network: HardhatTestnet },
    avalanche: { client: avaxClient, network: AvaxMainnet }
}

export function getNetworkClient(chainId: number): NetworkClient {

    console.log("getNetworkClient: currentChainId", chainId)
    const network = Object.values(NETWORKS).find((net) => net.network.chainId && net.network.chainId === chainId);
    if (!network) {
        throw new Error(`Network with chainId ${chainId} not found`);
    }
    return network;
}

export function GetContractAt(contract: any) {
    return new Contract(
        contract.address,
        contract.abi,
        new JsonRpcProvider(contract.rpcUrl)
    );
}

export function getContractInstance(chainId: number, address: string, abi: any) {
    let selectedNetwork = getNetworkClient(chainId);
    const provider = new JsonRpcProvider(selectedNetwork.network.rpcUrl);
    return new Contract(address, abi, provider);
}

export const getContractByName = (contractName: string, chainId: number): TCustomContract => {
    const contractGroup = ContractList[contractName];
    if (!contractGroup) {
        throw new Error(`Unknown contract name: ${contractName}`);
    }
    let contract: TCustomContract = {
        abi: contractGroup.abi,
        address: contractGroup.contracts[chainId].address
    }
    return contract;
}

export async function GetSigner(wallet: any) {
    const provider = new BrowserProvider(wallet);
    return await provider.getSigner();
}

export async function getERC20Balance(chainId: number, contractInformation: any, user: any) {
    let selectedNetwork = getNetworkClient(chainId);
    let balance: any = 0;
    try {
        if (contractInformation && user) {
            const contract = getContract({
                address: contractInformation.address,
                abi: contractInformation.abi,
                client: {
                    public: selectedNetwork.client,
                },
            });
            const res = await contract.read.balanceOf([user]);
            balance = res;
        }
        return balance;
    } catch (error) {
        console.log('getERC20Balance : ', error);
        return balance;
    }
}

export async function getERC20Allowance(chainId: number, contractInformation: any, user: any, to: any) {
    let selectedNetwork = getNetworkClient(chainId);
    let allowance: any = 0;
    try {
        if (contractInformation && user) {
            const contract = getContract({
                address: contractInformation.address,
                abi: contractInformation.abi,
                client: {
                    public: selectedNetwork.client,
                },
            });
            const res = await contract.read.allowance([user, to]);
            allowance = res;
        }
        return allowance;
    } catch (error) {
        console.log('getERC20Allowance : ', error);
        return allowance;
    }
}

export async function getContributors(chainId: number) {
    let selectedNetwork = getNetworkClient(chainId);
    let response: any = [];
    let contractInformation = getContractByName("DIAMOND", selectedNetwork.network.chainId)
    try {
        if (contractInformation) {
            const contract = getContract({
                address: contractInformation.address,
                abi: contractInformation.abi,
                client: {
                    public: selectedNetwork.client,
                },
            });
            const res = await contract.read.getContributors();
            response = res;
        }
        return response;
    } catch (error) {
        console.log('getContributors : ', error);
        return response;
    }
}

export async function getRegistrationFee(chainId: number) {
    let selectedNetwork = getNetworkClient(chainId);
    let response: bigint = BigInt(0);
    let contractInformation = getContractByName("DIAMOND", selectedNetwork.network.chainId)
    try {
        if (contractInformation) {
            const contract = getContract({
                address: contractInformation.address,
                abi: contractInformation.abi,
                client: {
                    public: selectedNetwork.client,
                },
            });
            const res: any = await contract.read.getRegistrationFee();
            response = res;
        }
    } catch (error) {
        console.log('getRegistrationFee : ', error);
    }
    return response;

}

export async function getPlayers(chainId: number) {
    let selectedNetwork = getNetworkClient(chainId);
    let response: any = [];
    let contractInformation = getContractByName("DIAMOND", selectedNetwork.network.chainId)
    try {
        if (contractInformation) {
            const contract = getContract({
                address: contractInformation.address,
                abi: contractInformation.abi,
                client: {
                    public: selectedNetwork.client,
                },
            });
            const res = await contract.read.getPlayers();
            response = res;
        }
        return response;
    } catch (error) {
        console.log('getPlayers : ', error);
        return response;
    }
}



export async function getAssets(chainId: number) {
    let selectedNetwork = getNetworkClient(chainId);
    let response: any = [];
    let contractInformation = getContractByName("DIAMOND", selectedNetwork.network.chainId)
    try {
        if (contractInformation) {
            const contract = getContract({
                address: contractInformation.address,
                abi: contractInformation.abi,
                client: {
                    public: selectedNetwork.client,
                },
            });
            const res = await contract.read.getAssets();
            response = res;
        }
        return response;
    } catch (error) {
        console.log('getAssets : ', error);
        return response;
    }
}

export async function getClaimHistory(chainId: number) {
    let selectedNetwork = getNetworkClient(chainId);
    let response: any = [];
    let contractInformation = getContractByName("DIAMOND", selectedNetwork.network.chainId)
    try {
        if (contractInformation) {
            const contract = getContract({
                address: contractInformation.address,
                abi: contractInformation.abi,
                client: {
                    public: selectedNetwork.client,
                },
            });
            const res = await contract.read.getClaimHistory();
            response = res;
        }
        return response;
    } catch (error) {
        console.log('getClaimHistory : ', error);
        return response;
    }
}
 


