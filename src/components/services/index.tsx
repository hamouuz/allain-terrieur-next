'use client'

import { Stack, Flex, Button, Text, VStack,  Heading,useBreakpointValue } from '@chakra-ui/react'



export default function WithBackgroundImage() {
  return (
    <Flex
      w={'full'}
      h={'100vh'}
      backgroundImage={
        'url(https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)'
      }
      backgroundSize={'cover'}
      backgroundPosition={'center center'}>
      <VStack
        w={'full'}
        justify={'center'}
        px={useBreakpointValue({ base: 4, md: 8 })}
        bgGradient={'linear(to-r, blackAlpha.800, transparent)'}>

        <Stack
        textAlign={'start'}
        align={'start'}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}>
        <Heading
          fontWeight={800}
          color={'white'}
          fontSize={{ base: '4xl', sm: '3xl', md: '6xl' }}
          lineHeight={'100%'}>
          La rénovation avec <br />
            <Text as={'span'} color={'orange.400'}>
            Allain-Terrieur
            </Text>
          
        </Heading>
        <Text color={'white'} maxW={'3xl'}>
        Que ce soit dans le cadre d’un projet de vente ou tout simplement pour profiter de
        davantage de confort, réaliser des travaux de rénovation de maison permet de réduire sa
        facture d’énergie ou de profiter d’un intérieur mieux agencé afin de gagner de l’espace par
        exemple. Chez Architoi, nous accompagnons tous ceux qui le souhaitent dans la rénovation
        de leur bien immobilier, grâce aux conseils d’architectes et de chefs de projet.
        </Text>
          <Stack direction={'row'}>
            
            <Button
              bg={'orange.500'}
              rounded={'full'}
              color={'white'}
              _hover={{ bg: 'blue.500' }}>
              Nos Services
            </Button>
           
          </Stack>
        </Stack>
      </VStack>
    </Flex>
  )
}