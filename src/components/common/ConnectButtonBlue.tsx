import { Button } from '@nextui-org/react';
import { useAppKit, useAppKitAccount } from '@reown/appkit/react';
import React, { useEffect } from 'react';
import { Globe } from 'lucide-react';

const ConnectButtonBlue = () => {
    const { open } = useAppKit();
    const { address, isConnected } = useAppKitAccount();

    useEffect(() => {

    }, [address])

    return (
        <Button
            size="lg"
            aria-label="connect-btn"
            radius="lg"
            className='px-2 '
            variant="solid"
            color="primary"
            startContent={
                isConnected ?
                    <div className='animate-spin'>asdad</div>
                    : <div className='animate-spin'>
                        <Globe size={32} color='white' />
                    </div>
            }

            onPress={() => open()}>
            {
                !isConnected && (
                    <div className='w-full flex flex-row gap-2 items-center justify-center'>
                        <span className='font-bold text-white'>Connect</span>
                    </div>
                )
            }
        </Button>
    );
};

export default ConnectButtonBlue;
