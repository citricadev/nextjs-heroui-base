import React from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";
import toast from 'react-hot-toast';
import { useCart } from "@/shared/context/CartContext";
import { ButtonGroup } from "@nextui-org/button";
import {
  IconCartDashFill,
  IconCartPlusFill,

} from "@/components/icons";



type ModalShopProps = {
  imageUrl?: string | null;
  title?: string | null;
  description?: string | null;
  url2?: string | null;
  price?: string | null;
  onClose: () => void;
  isOpen: boolean;

};


const ModalShop = ({ imageUrl, title, description, url2, onClose, price, isOpen, }: ModalShopProps) => {

  const { cartItems, addToCart, removeFromCart } = useCart();


  const getTotalQuantity = () => {
		
		const itemsArray = Object.values(cartItems);
		const totalQuantity = itemsArray.reduce((total, item) => total + item.quantity, 0);
		return totalQuantity;
	};


  return (
    <>

      <Modal
        backdrop="opaque"
        isOpen={isOpen}
        onOpenChange={onClose}
        motionProps={{
          variants: {
            enter: {
              y: 0,
              opacity: 1,
              transition: {
                duration: 0.3,
                ease: "easeOut",
              },
            },
            exit: {
              y: -20,
              opacity: 0,
              transition: {
                duration: 0.2,
                ease: "easeIn",
              },
            },
          }
        }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Tu Canasta</ModalHeader>
              <ModalBody>
                {cartItems.map((item) => (
                  <div key={item.id} className="flex gap-4  items-start">
                    <div className="flex flex-[1/3] justify-center items-start  ">
                      <img className="w-[60px] h-[50px] rounded-2xl" src={item.photo_url} alt="" />
                    </div>
                    <div className="flex flex-[2/3] flex-col ">
                      <div className="flex flex-col">
                        <p className="">{item.name}</p>
                        <p>Adicionales: papitas,gaseosa </p>
                        <p>{`$${parseFloat(item.price).toFixed(2)}`}</p>
                        
                      </div>
                      <div className="flex gap-3 justify-center items-center">
                        <ButtonGroup className="flex gap-3"> 
                        <Button 
                        isIconOnly
                        size="sm"
                        color="success" 
                        variant="ghost"
                        radius="full" 
                        onPress={() => {addToCart(item); toast.success('se agrego al carrito');} }>
                          <IconCartPlusFill/>
                        </Button>
                        <p>{item.quantity}U</p>
                        <Button 
                        isIconOnly
                        size="sm"
                        color="danger" 
                        variant="ghost" 
                        radius="full"
                        onPress={() => {removeFromCart(item.id); toast.success('se elimino al carrito');}}>
                          <IconCartDashFill/>
                        </Button>
                        </ButtonGroup>
                        
                      </div>
                    </div>
                  </div>
                ))}
              </ModalBody>
              <ModalFooter>
                {/* <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button> */}
                <Button color="primary" onPress={onClose}>
                  Action
                </Button>
                <span>Total de productos: {getTotalQuantity()}</span>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}

export default ModalShop;