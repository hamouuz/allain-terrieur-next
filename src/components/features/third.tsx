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
import { PiNumberSquareOneDuotone, PiNumberSquareTwoDuotone, PiNumberSquareThreeDuotone, PiNumberSquareFourDuotone } from 'react-icons/io5'
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

export default function SplitWithImage2() {
    return (
      <Container maxW={'5xl'} py={12} mt={110}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <Flex>
            <Image
              rounded={'md'}
              alt={'feature image'}
              src={
                'https://www.architoi.com/wp-content/uploads/2022/02/Contact-Pic-2-min.jpg'
              }
              objectFit={'cover'}
            />
          </Flex>
          <Stack spacing={4}>
            
            <Heading>Ton projet de rénovation en 4 étapes</Heading>
            
            <Stack
              spacing={4}
              divider={
                <StackDivider borderColor={useColorModeValue('gray.100', 'gray.700')} />
              }>
              <Feature
                icon={<Icon as={PiNumberSquareOneDuotone} color={'yellow.500'} w={5} h={5} />}
                iconBg={useColorModeValue('yellow.100', 'yellow.900')}
                text={'Devis Digital'}
              />
              <Feature
                icon={<Icon as={PiNumberSquareTwoDuotone} color={'green.500'} w={5} h={5} />}
                iconBg={useColorModeValue('green.100', 'green.900')}
                text={'Rencontre'}
              />
              <Feature
                icon={<Icon as={PiNumberSquareThreeDuotone} color={'purple.500'} w={5} h={5} />}
                iconBg={useColorModeValue('purple.100', 'purple.900')}
                text={'Conception du projet'}
              />
              <Feature
                icon={<Icon as={PiNumberSquareFourDuotone} color={'purple.500'} w={5} h={5} />}
                iconBg={useColorModeValue('purple.100', 'purple.900')}
                text={'Début des travaux'}
              />
            </Stack>
          </Stack>
        </SimpleGrid>
      </Container>
    )
  }