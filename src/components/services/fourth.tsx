'use client'

import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  StackDivider,
  Icon,
  useColorModeValue,
} from '@chakra-ui/react'
import { IoAnalyticsSharp, IoLogoBitcoin, IoSearchSharp } from 'react-icons/io5'
import { ReactElement } from 'react'

interface FeatureProps {
  text: string
  iconBg: string
  icon?: ReactElement
}

const Feature = ({ text, icon, iconBg }: FeatureProps) => {
  return (
    <Stack direction={'row'} align={'center'}>
      <Flex w={8} h={8} align={'center'} justify={'center'} rounded={'full'} bg={iconBg}>
        {icon}
      </Flex>
      <Text fontWeight={600}>{text}</Text>
    </Stack>
  )
}

export default function SplitWithImage4() {
  return (
    <Container maxW={'5xl'} py={12} mt={20}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>

        <Stack spacing={4}>
          <Heading>Les erreurs à ne pas faire lors d’une rénovation</Heading>
          <Text color={'gray.500'} fontSize={'lg'}>
          La rénovation de maison se fait généralement par étapes. On commence, tout d’abord, par bien isoler le toit ou les combles 
          afin de réduire sa facture d’énergie. Ensuite, on passe au ravalement de façade ou à 
          l’aménagement de la terrasse. Enfin, on effectue des changements à l’intérieur comme 
          la création d’une extension ou encore l’installation d’appareils intelligents et écologiques 
          (chauffages connectés, poêle à granulés, chaudière thermodynamique, etc.).
          Certaines de ces étapes peuvent sembler simples et accessibles. Néanmoins, faire appel à
           des professionnels de la rénovation de maison permet de t’assurer d’être accompagné 
           tout au long de ce projet par des professionnels qui connaissent parfaitement les 
           contraintes liées à ce type de travaux. Ils pourront, ainsi, te conseiller à chaque 
           étape concernant les matériaux à choisir, les éléments à prioriser ou bien les travaux 
           à réaliser.
          </Text>
        </Stack>

        <Flex>
          <Image
            rounded={'md'}
            alt={'feature image'}
            src={
              'https://plus.unsplash.com/premium_photo-1686090448422-de8536066f64?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            }
            objectFit={'cover'}
          />
        </Flex>
        
      </SimpleGrid>
    </Container>
  )
}