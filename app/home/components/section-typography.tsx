"use client"
import React from 'react'
import {Button} from "@heroui/button";
import Card from '@ui/atoms/card';

const SectionTypography = () => {
  return (
    <div className="pt-[64px]">
        <div className="flex gap-4 items-center">
          <Button size="sm">Small</Button>
          <Button size="md">Medium</Button>
          <Button size="lg">Large</Button>
        </div>
        <div className="flex gap-4 items-center">
          <Button size="sm">Small</Button>
          <Button size="md">Medium</Button>
          <Button size="lg">Large</Button>
        </div>
        <div className="flex gap-4 items-center">
          <Button size="sm">Small</Button>
          <Button size="md">Medium</Button>
          <Button size="lg">Large</Button>
        </div>
        <div className="flex gap-4 items-center">
          <Button size="sm">Small</Button>
          <Button size="md">Medium</Button>
          <Button size="lg">Large</Button>
        </div>
        <div className="flex gap-4 items-center">
        <Button
          className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg"
          radius="full"
        >
          BOTON LOCO
        </Button>
        </div>
        <div>
          <Card>
            Hola
          </Card>
        </div>
    </div>
  )
}

export default SectionTypography