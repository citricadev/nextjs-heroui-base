"use client"
import React from 'react'
import Card from '@ui/atoms/card';
import Text  from '@ui/atoms/text'; 
import { Container, Col } from '@/styles/07-objects/objects';
import Icon from '@ui/atoms/icon';
import Button from '@ui/molecules/button';

const SectionTypography = () => {
  return (
    <div className="pt-[64px]">
      <Container>
        <Col cols={{ lg: 12, md: 6, sm: 4 }}>
          <div>
            <Icon name="Home" size={20} />
            <Icon name="ChevronLeft" size={80} />
          </div>
          <div>
            <Text variant="display">Display</Text>
          </div>
          <section>
            <h1>
              <Text variant="heading" color="primary">Heading</Text>
            </h1>
          </section> 
          <div>
            <Text variant="title" color="quinary">Title</Text>
          </div>
          <div> 
            <Text variant="subtitle">Subtitle</Text>
          </div> 
          <div> 
            <Text variant="body" weight='bold'>Body</Text>
          </div>
          <div>
            <Text variant="label">Label</Text>
          </div>
          <div>
            <Button label="Botón" onClick={()=>console.log('CLICK')} color="success" textVariant="body"/>
          </div>
        </Col>
      </Container>
    </div>
  )
}

export default SectionTypography