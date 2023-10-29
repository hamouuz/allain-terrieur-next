'use client'

import { Stack, Flex, Button, Text, VStack,  Heading,useBreakpointValue } from '@chakra-ui/react'



export default function WithBackgroundImage() {
  return (
    <Flex
      w={'full'}
      h={'100vh'}
      backgroundImage={
        'url(https://assets.thesparksite.com/uploads/sites/2183/2022/01/spacejoy-9M66C-w-ToM-unsplash.jpg)'
      }
      backgroundSize={'cover'}
      backgroundPosition={'center center'}>
      <VStack
        w={'full'}
        justify={'center'}
        px={useBreakpointValue({ base: 4, md: 8 })}
        bgGradient={'linear(to-r, blackAlpha.800, transparent)'}>

        <Stack
        textAlign={'center'}
        align={'center'}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}>
        <Heading
          fontWeight={800}
          color={'white'}
          fontSize={{ base: '4xl', sm: '3xl', md: '6xl' }}
          lineHeight={'100%'}>
          Créons ensemble votre projet de rénovation{' '}
          
        </Heading>
        <Text color={'white'} maxW={'3xl'}>
         Alain Terrieur est un expert en décoration d'intérieur avec plus de 15 ans d'expérience dans 
         l'industrie. Sa passion pour la création d'espaces uniques et élégants l'a conduit à 
         travailler sur de nombreux projets exceptionnels.
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