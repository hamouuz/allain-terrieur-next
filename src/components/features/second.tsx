'use client'

import {
  Box,
  chakra,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  useColorModeValue,
} from '@chakra-ui/react'

interface StatsCardProps {
  title: string
  stat: string
}
function StatsCard(props: StatsCardProps) {
  const { title, stat } = props
  return (
    <Stat
      px={{ base: 4, md: 8 }}
      py={'5'}
      shadow={'xl'}
      border={'1px solid'}
      borderColor={useColorModeValue('gray.800', 'gray.500')}
      rounded={'lg'}>
      
      <StatNumber fontSize={'2xl'} fontWeight={'medium'} textAlign={'center'} marginBottom={'10px'}>
        {title}
      </StatNumber>
      <StatLabel fontWeight={'small'} fontSize={'md'} textAlign={'center'}>
        {stat}
      </StatLabel>
    </Stat>
  )
}

export default function BasicStatistics() {
  return (
    <Box maxW="7xl" mx={'auto'} pt={5} px={{ base: 2, sm: 12, md: 17 }}>
      <chakra.h1 textAlign={'center'} fontSize={'4xl'} py={10} fontWeight={'bold'} >
            
            <chakra.span color={'orange.500'}>Allain-Terrieur</chakra.span> en quelques chiffres

      </chakra.h1>


      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}>
            <StatsCard title={'+200 CHANTIERS'} stat={'Allain c’est +200 chantiers réalisés avec des clients toujours heureux de nos propositions et de notre qualité de travail'}  />
            <StatsCard title={'92% DE CLIENTS SATISFAITS'} stat={'Nous mettons tout en œuvre pour proposer la meilleure expérience à nos clients afin de leur permettre de réaliser leurs projets les plus fous'}  />
            <StatsCard title={'10 ANS DE GARANTIE'} stat={'Nous sommes sûrs de la qualité de nos matériaux et de nos ouvriers, c’est pourquoi, nous vous offrons la garantie 10 ans sur vos travaux'}  />
        </SimpleGrid>

        

    </Box>
  )
}