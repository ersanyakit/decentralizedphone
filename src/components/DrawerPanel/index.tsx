import {
  Avatar,
  AvatarGroup,
  Button,
  Card,
  CardBody,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  Image,
  Link,
  ScrollShadow,
  Tab,
  Tabs,
  Tooltip,
} from '@nextui-org/react';
import { FC, useState } from 'react';
import { CopyX } from 'lucide-react';

interface DrawerPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

const DrawerPanel: FC<DrawerPanelProps> = ({ isOpen, onClose }) => {
  const [selected, setSelected] = useState<string>("pins");

  return (
    <>
      <Drawer
        backdrop='blur'
        hideCloseButton
        placement="left"
        classNames={{
          base: 'rounded-lg  bg-black/40 border border-1 border-black/40 shadow-lg',
        }}
        isOpen={isOpen}
        onClose={onClose}
      >
        <DrawerContent>
          {(onClose) => (
            <>
              <DrawerHeader
                className="z-[9999] absolute top-0 inset-x-0 flex flex-row gap-2 p-4 py-2 border-b border-black/50 shadow-lg items-center justify-between ">
             
                <div className="w-full flex justify-start gap-2 ">
                  <Tabs classNames={{tabContent:"!text-white" }} size='lg' selectedKey={selected} onSelectionChange={(key) => setSelected(String(key))} color='primary' variant='light' fullWidth>
                    <Tab key={"pins"} title={"Tasks"}></Tab>
                    <Tab key={"players"} title={"Millionaires"}></Tab>
                    <Tab key={"history"} title={"Claims"}></Tab>
                    <Tab key={"profile"} title={"Profile"}></Tab>
                  </Tabs>
                  
                </div>
                <div className="flex gap-1 items-center">


                </div>
              </DrawerHeader>
              <DrawerBody className="pt-14 px-0 ">
                <div className="w-full flex flex-row gap-2 items-center justify-between bg-primary/60 text-lime-500 p-2">
                  <h1 className="text-2xl">
                    {(() => {
                      switch (selected) {
                        case "pins":
                          return "Tasks";
                        case "history":
                          return "History";
                        case "players":
                          return "Millionaries";
                        case "profile":
                          return "Profile";
                        default:
                          return "Tasks";
                      }
                    })()}
                  </h1>
                  <Tooltip content="Close">
                  <Button
                    isIconOnly
                    className=" text-default-400"
                    size="sm"
                    variant="light"
                    onPress={onClose}
                  >
                    <CopyX />
                  </Button>
                </Tooltip>

                </div>

                <ScrollShadow hideScrollBar>
                  <div className='w-full px-2'>

                   

                  </div>

                </ScrollShadow>



              </DrawerBody>
              <DrawerFooter className="grid grid-cols-3 items-center justify-center gap-2">

               

              </DrawerFooter>
            </>
          )}
        </DrawerContent>
      </Drawer>
    </>
  );
};
export default DrawerPanel;
