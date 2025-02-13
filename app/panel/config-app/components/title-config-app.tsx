'use client'
import React from 'react'
import Text from '@/shared/components/citrica-ui/atoms/text';
import { useSearchParams } from 'next/navigation';

const TitleConfigApp = () => {
  const searchParams = useSearchParams();
  const typeApp = searchParams.get('type');
  return (
    <div><Text variant="heading">{`Config App ${typeApp}`}</Text></div>
  )
}

export default TitleConfigApp