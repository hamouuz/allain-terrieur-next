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

export default function SplitWithImage() {
  return (
    <Container maxW={'5xl'} py={12}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Stack spacing={4}>
          <Text
            textTransform={'uppercase'}
            color={'black.400'}
            fontWeight={600}
            fontSize={'sm'}
            bg={useColorModeValue('yellow.50', 'orange.900')}
            p={2}
            alignSelf={'flex-start'}
            rounded={'md'}>
            Notre Vision
          </Text>
          <Heading>Rêves en Harmonie : Révéler l'Art Unique de Chaque Intérieur</Heading>
          <Text color={'gray.500'} fontSize={'lg'}>
          Notre vision est de faire de chaque maison un rêve incarné. Au-delà de l'esthétique, 
          la décoration devient une expérience, reflétant la personnalité de nos clients. Chaque 
          choix vise à créer un espace harmonieux, où fonctionnalité et élégance se rencontrent. 
          Chaque détail est pensé pour 
          faire de chaque maison un lieu exceptionnel, une véritable œuvre d'art habitée.
          </Text>
          
        </Stack>
        <Flex>
          <Image
            rounded={'md'}
            alt={'feature image'}
            src={
              'https://images.unsplash.com/photo-1618220048045-10a6dbdf83e0?auto=format&fit=crop&q=80&w=1480&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            }
            objectFit={'cover'}
          />
        </Flex>
      </SimpleGrid>
    </Container>
  )
}