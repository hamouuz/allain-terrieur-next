import { Flex, Heading, Image, Stack, Text, useBreakpointValue } from '@chakra-ui/react';

export default function SplitScreen() {
  return (
    <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
        <Stack spacing={6} w={'full'} maxW={'lg'} textAlign="center">
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
                bg: 'orange.400',
                zIndex: -1,
              }}>
              Pourquoi faire appel
            </Text>
            <br />{' '}
            <Text color={'orange.400'} as={'span'}>
              à des professionnels ?
            </Text>{' '}
          </Heading>
          <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'} textAlign="center">
            <p>La rénovation d'une maison implique généralement un processus étape par étape. En premier lieu, on commence par l'isolation du toit ou des combles pour réduire la consommation d'énergie. Ensuite, on s'attaque au ravalement de la façade ou à l'aménagement de la terrasse, avant d'entreprendre des changements intérieurs tels que l'ajout d'une extension ou l'installation d'appareils intelligents et écologiques tels que des chauffages connectés, des poêles à granulés ou des chaudières thermodynamiques, par exemple.</p>
            <br />
            <p>Bien que certaines de ces étapes puissent sembler abordables par des bricoleurs amateurs, faire appel à des professionnels de la rénovation de maison offre l'avantage d'être accompagné tout au long du projet par des experts connaissant parfaitement les contraintes inhérentes à ce type de travaux. Ils seront en mesure de vous conseiller à chaque étape, que ce soit en matière de choix de matériaux, de priorités ou d'exécution des travaux.</p>
            <br />
            <p>En confiant votre projet de rénovation à l'équipe d'Alain TERIEUR, vous avez la garantie d'une exécution réussie. Cela est rendu possible grâce à un architecte ou à un chef de projet qui sera votre interlocuteur principal, répondra à toutes vos questions, vous tiendra informé de l'avancée des travaux, et agira comme un médiateur entre vous et les artisans responsables de la réalisation des travaux.</p>
          </Text>
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image
          alt={'Login Image'}
          objectFit={'cover'}
          src={
            'https://images.pexels.com/photos/2440471/pexels-photo-2440471.jpeg?auto=compress&cs=tinysrgb&w=800'
          }
        />
      </Flex>
    </Stack>
  );
}
