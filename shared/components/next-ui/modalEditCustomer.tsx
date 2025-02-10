"use client"
import React, { useState } from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, Input } from "@nextui-org/react";
import { Container, Col } from "@citrica/objects";
import { useForm, SubmitHandler } from "react-hook-form";
import { Customer, Months } from '@/shared/types/types';
import {Select, SelectItem} from "@nextui-org/react";
import { Key } from "@react-types/shared"; 

type ModalEditCustomersProps = {
	isOpen: boolean;
	onClose: () => void;
	user: Customer | null;
	onSubmit: (data: Customer) => void;
};


const ModalEditCustomers: React.FC<ModalEditCustomersProps> = ({ isOpen, onClose, user, onSubmit }) => {
	const isEditing = !!user?.id;
	const userBirthdayMonth = user?.birthday_month ? [String(user?.birthday_month)] : undefined;

	const { register, handleSubmit, setValue, } = useForm<Customer>();
	const [newSelectedMonth, setNewSelectedMonth] = useState<Iterable<Key> | undefined>(undefined);

	const handleSubmitForm: SubmitHandler<Customer> = async (data) => {
		const selectedMonth = data.birthday_month;
		const newData = {
			...data,
			birthday_month: selectedMonth,
		};
		onSubmit(newData);
		setNewSelectedMonth(undefined);
		onClose();
	};

	
	
	const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>, field: keyof Customer) => {
		console.log('Cambio field =>', field);
		const value = event.target.value;
		const numericValue = parseInt(value, 10);
		if (field === "birthday_month") setNewSelectedMonth([value]);
		setValue(field, numericValue);
	};
	

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, field: keyof Customer) => {
		const value = e.target.value;
		setValue(field, value);
	};

	React.useEffect(() => {
		if (user) {
			setValue("full_name", user.full_name || "");
			setValue("email", user.email || "");
			setValue("phone", user.phone || "");
			setValue("dp", user.dp || 0);
			setValue("favorable_balance", user.favorable_balance || 0);
			setValue("debt_credit", user.debt_credit || 0);
			setValue("reference", user.reference || "");
			setValue("note", user.note || "");
			setValue("birthday_day", user.birthday_day || 0);
			
		}
	}, [setValue, user]);


	return (
		<>

			<Modal
				backdrop="opaque"
				isOpen={isOpen}
				onOpenChange={onClose}
				size={"5xl"}
				title={isEditing ? 'Editar Cliente' : 'Nuevo Cliente'}
				onClose={()=>setNewSelectedMonth(undefined)}
			>
				<ModalContent className=" h-screen overflow-y-auto">
					{(onClose) => (
						<>
							<Container noPadding className="flex flex-col gap-1">
								<Col cols={{ lg: 12, md: 6, sm: 4 }}>
									<ModalHeader >{isEditing ? 'ACTUALIZAR' : 'CREAR CLIENTE'}</ModalHeader>
								</Col>
								<ModalBody>
									<Col cols={{ lg: 12, md: 6, sm: 4 }}>
										<span className="pl-1">Datos personales:</span>
									</Col>
									<Col className="flex items-center flex-col md:flex-row sm:flex-row gap-5 " cols={{ lg: 12, md: 6, sm: 4 }}>

											<Input
												isRequired
												type="name"
												label="Nombre completo"
												placeholder="Ingresa el nombre"
												className="max-w-xs "
												variant="bordered"
												color="default"
												{...register("full_name", {
													required: true,
												})}

												onChange={(e) => handleInputChange(e, "full_name")}
											/>

											<Input
												isRequired
												type="tel"
												label="Teléfono"
												placeholder="Ingresa el teléfono"
												className="max-w-xs"
												variant="bordered"
												color="danger"
												{...register("phone", {

												})}
												onChange={(e) => handleInputChange(e, "phone")}
											/>
											<Input
												isRequired
												type="email"
												label="Email"
												placeholder="Ingresa el correo electrónico"
												className="max-w-xs"
												variant="bordered"
												color="danger"
												{...register("email", {
													required: true,
													validate: {
														maxLength: (v) =>
															v.length <= 50 || "The email should have at most 50 characters",
														matchPattern: (v) =>
															/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
															"Email address must be a valid address",
													},
												})}

												onChange={(e) => handleInputChange(e, "email")}

											/>

										
									</Col>
									<Col className="flex items-center flex-col md:flex-row sm:flex-row gap-5 " cols={{ lg: 12, md: 6, sm: 4 }}>
										
											<Input
												isRequired
												type="text"
												label="Referencia (opcional)"
												placeholder="Ejem del taller"
												className="max-w-xs"
												variant="bordered"
												color="danger"
												{...register("reference", {

												})}
												onChange={(e) => handleInputChange(e, "reference")}

											/>

											<Input
												isRequired
												type="text"
												label="Nota Cliente (opcional)"
												placeholder="Ejem solo almuerzos"
												className="max-w-xs"
												variant="bordered"
												color="danger"
												{...register("note", {

												})}
												onChange={(e) => handleInputChange(e, "note")}
											/>

											<Input
												isRequired
												type="number"
												label="Cumpleaños día"
												placeholder="1"
												className="max-w-xs"
												variant="bordered"
												color="danger"
												{...register("birthday_day", {
													min:1,
													max:31,
													pattern: {
														value: /^[1-9]$|^1[0-9]$|^2[0-9]$|^3[0-1]$/,
														message: "Ingresa un número válido entre 1 y 31",
													},

												})}
												onChange={(e) => handleInputChange(e, "birthday_day")}
											/>
											<Select
												label="Cumpleaños mes"
												placeholder="Seleccione un Mes"
												className="max-w-xs"
												variant="bordered"
												color="danger"
												{...register("birthday_month")}
												selectedKeys={newSelectedMonth ? newSelectedMonth : userBirthdayMonth}
												onChange={(event) => handleSelectChange(event, "birthday_month")}
											>
												{Months.map((month) => (
													<SelectItem key={month.value} value={month.value} >
														{month.label}
													</SelectItem>
												))}
												
											</Select>
										
									</Col>

									<Col cols={{ lg: 12, md: 6, sm: 4 }}>
										<span className="pl-1">Datos cuenta (inicial):</span>
									</Col>
									<Col className="flex flex-col items-center md:flex-row sm:flex-row gap-5 " cols={{ lg: 12, md: 6, sm: 4 }}>

										
											<Input
												isRequired
												type="number"
												label="Deuda actual"
												placeholder="$0"
												className="max-w-xs"
												variant="bordered"
												color="danger"
												{...register("debt_credit", {

												})}
												onChange={(e) => handleInputChange(e, "debt_credit")}
											/>
											<Input
												isRequired
												type="number"
												label="Saldo a Favor"
												placeholder="$0"
												className="max-w-xs"
												variant="bordered"
												color="danger"
												{...register("favorable_balance", {

												})}
												onChange={(e) => handleInputChange(e, "favorable_balance")}
											/>
											<Input
												isRequired
												type="number"
												label="Delix Puntos"
												placeholder="0"
												className="max-w-xs"
												variant="bordered"
												color="danger"
												{...register("dp", {

												})}
												onChange={(e) => handleInputChange(e, "dp")}
											/>
										
									</Col>
								</ModalBody>

								<Col cols={{ lg: 12, md: 6, sm: 4 }}>
									<ModalFooter className="flex justify-around p-9">
										<Button variant="light" onPress={onClose}>
											Cancelar
										</Button>
										<Button
											className="bg-[rgba(0,111,238,1)] text-white"
											onClick={handleSubmit(handleSubmitForm)}>
											{isEditing ? 'Actualizar Cliente' : 'Crear Cliente'}
										</Button>
									</ModalFooter>
								</Col>
							</Container>
						</>
					)}
				</ModalContent>
			</Modal>
		</>
	);
}

export default ModalEditCustomers;