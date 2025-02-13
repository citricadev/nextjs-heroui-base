"use client"
import React from 'react'
import Card from '@ui/atoms/card';
import Text  from '@ui/atoms/text'; 
import { Container, Col } from '@/styles/07-objects/objects';

const SectionTypography = () => {
  return (
    <div className="pt-[64px]">
      <Container>
        <Col cols={{ lg: 12, md: 6, sm: 4 }}>
          <div>
            <Text variant="display">Display</Text>
          </div>
          <div>
            <Text variant="heading" color="#22FF11">Heading</Text>
          </div> 
          <div>
            <Text variant="title" color="#0F92EE">Title</Text>
          </div>
          <div> 
            <Text variant="subtitle">Subtitle</Text>
          </div> 
          <div> 
            <Text variant="body">Body</Text>
          </div>
          <div>
            <Text variant="label">Label</Text>
          </div>
        </Col>
      </Container>
    </div>
  )
}

export default SectionTypography