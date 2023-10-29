import {
    Flex,
    Heading,
    Image,
    Stack,
    Text,
    useBreakpointValue,
  } from '@chakra-ui/react';
  
  export default function SplitScreen() {
    const containerStyle = {
      position: 'relative',
      minHeight: '100vh',
    };
  
    const textContainerStyle = {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.6)',
      color: 'white',
    };
  
    return (
      <div style={containerStyle}>
        <Image
          alt={'Login Image'}
          src={
            "https://reno-cuisine.com/wp-content/uploads/2022/05/sidekix-media-hmz7nC5mEu4-unsplash-1-1.jpg"
          }
          style={{
            objectFit: 'cover',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            width: '100%',
            height: '100%',
          }}
        />
        <div style={textContainerStyle}>
          <Stack p={8} textAlign="center">
            <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
              <Text
                as={'span'}
                position={'relative'}
                _after={{
                  content: "''",
                  width: 'full',
                  height: useBreakpointValue({ base: '20%', md: '30%' }),
                  position: 'absolute',
                  bottom: 1,
                  left: 0,
                  zIndex: -1,
                }}>
                <Text color={'orange.400'}>Réalisez votre rénovation d’appartement avec Alain TERIEUR</Text>
              </Text>
            </Heading>
            <Text fontSize={{ base: 'md', lg: 'lg' }} color="white">
              As-tu envisagé de moderniser ton appartement pour le mettre en conformité avec les normes actuelles ou pour améliorer son isolation ? Chez Architoi, nos spécialistes sont prêts à t'offrir un soutien complet, de la planification à la réalisation, en te proposant des solutions sur mesure qui correspondent à tes exigences, à ton budget et au style de ton appartement. Voici un bref aperçu de ce que notre formule de rénovation d'appartement peut t'apporter.
            </Text>
          </Stack>
        </div>
      </div>
    );
  }
  