import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    Flex,
    useColorModeValue,
    Text,
    Container,
    Image,
  } from '@chakra-ui/react';
  
  import { ChevronDownIcon } from '@chakra-ui/icons';
  
  export default function CenteredImageAccordionWithText() {
    return (
      <Flex minH={'100vh'} bg={useColorModeValue('gray.50', 'gray.800')}>
        {/* Image à gauche */}
        <Image
          src="https://static.cotemaison.fr/medias_11951/w_1365,h_1365,c_crop,x_362,y_0/w_1000,h_1000,c_fill,g_north/v1596117660/un-sejour-versaillais-moderne_6119161.jpeg"
          alt="Image"
          w="50%" // Largeur de l'image
          h="100vh" // Hauteur de l'image
          objectFit="cover" // Pour s'assurer que l'image couvre toute la hauteur
        />
        {/* Conteneur de texte et accordions à droite, centré */}
        <Container
          w="50%"
          p={4}
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Text color="gray.600" textAlign="center">
          Les tâches courantes de modernisation, telles que la peinture et le remplacement des sols, sont souvent réalisées par les propriétaires ou des artisans sans besoin de supervision spéciale. Toutefois, les travaux de rénovation d'appartement plus complexes sont plus efficacement menés sous la direction de professionnels. C'est pourquoi les architectes d'intérieur et les chefs de projet d'Alain TERIEUR sont prêts à superviser ces travaux, notamment:
          </Text>
          <Accordion allowMultiple maxW="lg" rounded="lg" mt={4}>
            <AccordionItem>
              <AccordionButton
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                p={4}
              >
                <Text color={'orange.400'} fontSize="md">Rénovation des sols</Text>
                <ChevronDownIcon fontSize="24px" />
              </AccordionButton>
              <AccordionPanel pb={4}>
                <Text color="gray.600">
                Si elle est à refaire, tes travaux vont être plus longs et donc plus onéreux.
                </Text>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionButton
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                p={4}
              >
                <Text color={'orange.400'} fontSize="md">L’isolation thermique et sonore ou l’étanchéité,</Text>
                <ChevronDownIcon fontSize="24px" />
              </AccordionButton>
              <AccordionPanel pb={4}>
                <Text color="gray.600">
                Sol, plafonds, ou même toiture, il est important d'isoler pour un meilleur confort et une énergie optimisée.
                </Text>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionButton
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                p={4}
              >
                <Text color={'orange.400'} fontSize="md">La structure</Text>
                <ChevronDownIcon fontSize="24px" />
              </AccordionButton>
              <AccordionPanel pb={4}>
                <Text color="gray.600">
                Parfois, pour apporter plus de lumière il faut toucher à la structure du bâtiment : démolition d'un mur porteur, renforcement etc.
                </Text>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionButton
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                p={4}
              >
                <Text color={'orange.400'} fontSize="md">L'évacuation des eaux usées</Text>
                <ChevronDownIcon fontSize="24px" />
              </AccordionButton>
              <AccordionPanel pb={4}>
                <Text color="gray.600">
                Concernant par exemple tes sanitaires, si dans ton projet de réaménagement tu ne peux pas les raccorder à l’évacuation, vous serez bloqués.
                </Text>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Container>
      </Flex>
    );
  }
  