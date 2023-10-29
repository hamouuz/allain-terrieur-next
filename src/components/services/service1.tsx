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
            "https://res.cloudinary.com/hm3mec8bl/image/upload/v1625729298/fsv7k096j4kyqfjz4tl1.png"
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
                <Text color={'orange.400'}>La rénovation de ta maison avec Alain TERIEUR</Text>
              </Text>
            </Heading>
            <Text fontSize={{ base: 'md', lg: 'lg' }} color="white">
              Que ce soit pour un projet de vente ou pour améliorer votre confort au quotidien, les travaux de rénovation domiciliaire offrent l'opportunité de réduire vos dépenses énergétiques tout en optimisant l'agencement de votre intérieur pour maximiser l'espace. Chez Alain TERIEUR, nous sommes à votre service pour vous accompagner dans la rénovation de votre bien immobilier en mettant à votre disposition l'expertise de nos architectes et chefs de projet.
            </Text>
          </Stack>
        </div>
      </div>
    );
  }
  