"use client"
import React from 'react'
import Card from '@ui/atoms/card';
import Text from '@ui/atoms/text';
import { Container, Col } from '@/styles/07-objects/objects';
import Icon from '@ui/atoms/icon';
import Button from '@ui/molecules/button';
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

const SectionTypography = () => {
  const { theme, setTheme } = useTheme();
  return (
    <div className="pt-[64px]">
      <Container>
        <Col cols={{ lg: 12, md: 6, sm: 4 }}>
          <div>
            <Icon name="Home" size={20} />
            <Icon name="ChevronLeft" size={80} />
          </div>
          <div>
            <Text variant="display" textColor="color-on-container">Display</Text>
          </div>
          <section>
            <h1>
              <Text variant="headline" textColor="color-on-container">Headline</Text>
            </h1>
          </section>
          <div>
            <Text variant="title" textColor="color-on-container">Title</Text>
          </div>
          <div>
            <Text variant="subtitle" color="#F00">Subtitle</Text>
          </div>
          <div>
            <Text variant="body" weight='bold'>Body</Text>
          </div>
          <div>
            <Text variant="label">Label</Text>
          </div>
          <div>
            <Button label="Botón" onClick={() => console.log('CLICK')} variant="secondary" />
          </div>
        </Col>
      </Container>
      <Container>
        <Col cols={{ lg: 12, md: 6, sm: 4 }}>
          <button
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className="rounded-md p-2 hover:bg-accent"
          >
            <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </button>
        </Col>
      </Container>
    </div>
  )
}

export default SectionTypography