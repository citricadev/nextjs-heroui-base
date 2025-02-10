import React from "react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button,} from "@nextui-org/react";
import toast from 'react-hot-toast';
import Options from "./option";
import { CartIcon } from "../citrica-ui/carticon";


type ModalProps = {
  imageUrl?: string | null;
  title?: string | null;
  description?: string | null;
  url2?: string | null;
  price?:string | null;
  onClose: () => void;
	isOpen:boolean;
  onAddToCart: () => void;
}; 
const ModalStarred = ({ imageUrl, title, description, url2, onClose, price, isOpen, onAddToCart }: ModalProps) => {

  const addProduct = () => { 
    onAddToCart(); 
    onClose(); 
    toast.success('se agrego al carrito');
  }

  return (
    <>
      {isOpen && ( 
      <Modal isOpen={isOpen} onOpenChange={onClose}>
        <ModalContent>
          {(onClose) => (
            <>{title && (
							<ModalHeader className="flex flex-col gap-1">{title}</ModalHeader>
						)}
              
              <ModalBody>
							{imageUrl && (
              <div className="flex justify-center items-center ">
                <img className=" w-[400px]   rounded-2xl" src={imageUrl} alt="" />
              </div>
            )}
                {description && (
                  <p className="modal-description">{description}</p>
                )}
                {price && !isNaN(parseFloat(price)) && (
                <p className="text-default-500">{`$${parseFloat(price).toFixed(2)}`}</p>
                )}
                {/* <Options/> */}
              </ModalBody>
              <ModalFooter>
                {/* <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button> */}
                <Button color="primary" onPress={() => addProduct()}>
                {/* este botom debe permitir que se aguegue el producto al carrito */}
                <CartIcon size={30}/> 
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
			)}
    </>
  );
}

export default ModalStarred;