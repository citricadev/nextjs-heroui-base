import { useState } from "react";
import { CheckboxGroup, Checkbox } from "@nextui-org/react";
import { Accordion, AccordionItem } from "@nextui-org/react";


const Options = () => {
	const [selected, setSelected] = useState([""]);

	// return (
	// 	<Accordion variant="shadow">
	// 		<AccordionItem  classNames={{
  //           title: "text-red-700",
            
  //         }} key="1" aria-label="Adici" title="Adicionales"  >
	// 			<div className="flex flex-col gap-3">
	// 				<CheckboxGroup
	// 					label="Opcionales"
	// 					color="warning"
	// 					value={selected}
	// 					onValueChange={setSelected}
	// 				>
	// 					<Checkbox value="Refresco">Refresco</Checkbox>
	// 					<Checkbox value="Tequeños">Tequeños</Checkbox>
	// 					<Checkbox value="Papa Frita">Papa Frita</Checkbox>
	// 				</CheckboxGroup>
	// 				<p className="text-default-500 text-small">Seleccionados: {selected.join(", ")}</p>
	// 			</div>
	// 		</AccordionItem>
	// 	</Accordion>
	// );
}

export default Options;

