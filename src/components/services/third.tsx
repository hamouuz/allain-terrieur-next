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
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  
} from '@chakra-ui/react'
import { IoAnalyticsSharp, IoLogoBitcoin, IoSearchSharp } from 'react-icons/io5'
import { ReactElement } from 'react'
import { ChevronDownIcon } from '@chakra-ui/icons'

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

export default function SplitWithImage3() {
  return (
    <Container maxW={'5xl'} py={12} mt={10} >

         <Stack spacing={4} mb={20} textAlign={'center'} color={'black.400'}>
          <Heading>Pourquoi rénover sa maison ?</Heading>
        </Stack>

      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>

      <Flex>
          <Image
            rounded={'md'}
            alt={'feature image'}
            src={
              'https://images.unsplash.com/photo-1532490389938-2856e3f1560a?auto=format&fit=crop&q=80&w=1480&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            }
            objectFit={'cover'}
          />
        </Flex>

        <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('white.50', 'white.800')}>
      <Container>
        <Accordion allowMultiple width="100%" maxW="lg" rounded="lg">
          <AccordionItem>
            <AccordionButton
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              p={4}>
              <Text fontSize="lg" color={'orange.400'}>Appartements & Maisons</Text>
              <ChevronDownIcon fontSize="24px" />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <Text color="gray.600">
              Tu as envie d’une nouvelle cuisine plus équipée, plus confort et plus moderne ?
            La rénovation te permet de changer complètement ton lieu de vie. Tu pourras choisir une rénovation moderne ou le simple regain de cachet de maison. Weehus t’accompagne dans le choix de tes produits et la réflexion autour de leurs mises en place pour un rendu à ton image. Nous te proposons aussi des matériaux novateurs pour rénover autrement comme l’utilisation de la peinture éco-responsable.
            Lors de la rénovation de l’intérieur de ta maison il est important de se créer un univers correspondant à tes envies:
            Style contemporain : Des lignes simples et épurées, un choix de matériaux maîtrisés, des couleurs sobres, quelques motifs et une décoration respectant l’harmonie de l’architecture et le caractère de ta maison.
            Style traditionnel: Des matériaux comme le bois, la pierre, des tissus, des couleurs plus saturées et des imprimés, des meubles rustiques.
              </Text>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionButton
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              p={4}>
              <Text fontSize="lg" color={'orange.400'}>Restaurants</Text>
              <ChevronDownIcon fontSize="24px" />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <Text color="gray.600">
              Tu as la volonté de revendre ta maison ou simplement la moderniser ? Un logement rénové permet de garder la valeur de ton patrimoine intacte grâce à la rénovation de ta toiture par exemple. Tu peux aussi augmenter sa valeur en installant des matériaux innovants et plus responsables à moindre coût en profitant des aides mises à disposition en faveur de la transition. La domotique permet elle aussi d’augmenter la valeur de ton foyer et le rend plus fonctionnel.
              </Text>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionButton
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              p={4}>
              <Text fontSize="lg" color={'orange.400'}>Bureaux</Text>
              <ChevronDownIcon fontSize="24px" />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <Text color="gray.600">
              Ta maison est ancienne et mérite d’être remise aux normes actuelles, Weehus t’accompagne prends ton projet en main pour la rénover sans changement visible !
              </Text>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Container>
    </Flex>
      
      </SimpleGrid>
    </Container>
  )
}