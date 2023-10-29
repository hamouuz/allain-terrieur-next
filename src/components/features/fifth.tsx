'use client'

import {
  Box,
  Heading,
  Image,
  Text,
  Divider,
  HStack,
  Tag,
  Wrap,
  WrapItem,
  SpaceProps,
  useColorModeValue,
  Container,
  VStack,
} from '@chakra-ui/react'

interface IBlogTags {
  tags: Array<string>
  marginTop?: SpaceProps['marginTop']
}

interface Props {
  marginTop?: number
  tags: any[]
}

const BlogTags = (props: Props) => {
  const { marginTop = 0, tags } = props

  return (
    <HStack spacing={2} marginTop={marginTop}>
      {tags.map((tag) => {
        return (
          <Tag size={'md'} variant="solid" colorScheme="orange" key={tag}>
            {tag}
          </Tag>
        )
      })}
    </HStack>
  )
}

interface BlogAuthorProps {
  date: Date
  name: string
}

const BlogAuthor = (props: BlogAuthorProps) => {
  return (
    <HStack marginTop="2" spacing="2" display="flex" alignItems="center">
      <Image
        borderRadius="full"
        boxSize="40px"
        src="https://100k-faces.glitch.me/random-image"
        alt={`Avatar of ${props.name}`}
      />
      <Text fontWeight="medium">{props.name}</Text>
      <Text>—</Text>
      <Text>{props.date.toLocaleDateString()}</Text>
    </HStack>
  )
}

const ArticleList = () => {
  return (
    <Container maxW={'7xl'} p="12" > 
      
      <Heading as="h2" marginTop="20" textAlign={'center'}>
      Suivez tous nos conseils, actualités et guides sur <Heading color={'orange.500'}>la rénovation</Heading>
      </Heading>
      <Divider marginTop="5" />


    

       
    <Wrap spacing={{ base: '10px', sm: '30px', md: '30px', lg: '30px' }} marginTop="5">
        <WrapItem width={{ base: '100%', sm: '50%', md: '25%', lg: '25%' }}>
            <Box w="100%">
            <Box borderRadius="lg" overflow="hidden">
              <Box textDecoration="none" _hover={{ textDecoration: 'none' }}>
                <Image
                  transform="scale(1.0)"
                  src={
                    'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&q=80&w=1380&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                  }
                  alt="some text"
                  objectFit="contain"
                  width="100%"
                  transition="0.3s ease-in-out"
                  _hover={{
                    transform: 'scale(1.05)',
                  }}
                />
              </Box>
            </Box>
            <BlogTags tags={['Engineering', 'Product']} marginTop={3} />
            <Heading fontSize="xl" marginTop="2">
              <Text textDecoration="none" _hover={{ textDecoration: 'none' }}>
              Décorateur intérieur : pourquoi le consulter ?
              </Text>
            </Heading>
            <Text as="p" fontSize="md" marginTop="2">
            Dans un monde où tout est personnalisable, on a aussi envie d'une touche spéciale dans nos maisons ou appartements.  De la chambre à coucher en passant par la cuisine et le salon, mais...
            </Text>
            <BlogAuthor name="John Doe" date={new Date('2021-04-06T19:01:27Z')} />
          </Box>
        </WrapItem>

        <WrapItem width={{ base: '100%', sm: '50%', md: '25%', lg: '25%' }}>
            <Box w="100%">
            <Box borderRadius="lg" overflow="hidden">
              <Box textDecoration="none" _hover={{ textDecoration: 'none' }}>
                <Image
                  transform="scale(1.0)"
                  src={
                    'https://images.unsplash.com/photo-1503174971373-b1f69850bded?auto=format&fit=crop&q=80&w=1513&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                  }
                  alt="some text"
                  objectFit="contain"
                  width="100%"
                  transition="0.3s ease-in-out"
                  _hover={{
                    transform: 'scale(1.05)',
                  }}
                />
              </Box>
            </Box>
            <BlogTags tags={['Engineering', 'Product']} marginTop={3} />
            <Heading fontSize="xl" marginTop="2">
              <Text textDecoration="none" _hover={{ textDecoration: 'none' }}>
              Appartement à rénover : 6 phases pour réussir
              </Text>
            </Heading>
            <Text as="p" fontSize="md" marginTop="2">
            Tu souhaites apporter une ambiance chaleureuse chez toi ? Recevoir tes amis, ta famille, discuter avec eux tout en préparant le repas ? Grâce à l’aménagement salon cuisine ouverte, c’est pos...
            </Text>
            <BlogAuthor name="Flavy Laquaye" date={new Date('2021-04-06T19:01:27Z')} />
          </Box>
        
         </WrapItem>



         
        <WrapItem width={{ base: '100%', sm: '50%', md: '25%', lg: '25%' }}>
        <Box w="100%">
            <Box borderRadius="lg" overflow="hidden">
              <Box textDecoration="none" _hover={{ textDecoration: 'none' }}>
                <Image
                  transform="scale(1.0)"
                  src={
                    'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                  }
                  alt="some text"
                  objectFit="contain"
                  width="100%"
                  transition="0.3s ease-in-out"
                  _hover={{
                    transform: 'scale(1.05)',
                  }}
                />
              </Box>
            </Box>
            <BlogTags tags={['Engineering', 'Product']} marginTop={3} />
            <Heading fontSize="xl" marginTop="2">
              <Text textDecoration="none" _hover={{ textDecoration: 'none' }}>
              Quel style de maison vous correspond ?
              </Text>
            </Heading>
            <Text as="p" fontSize="md" marginTop="2">
            Tu souhaites construire une maison, mais tu ne sais pas quel style choisir ? En effet, il existe en réalité 4 styles de maison qui sont les plus répandus en France : la maison contemporaine, l...
            </Text>
            <BlogAuthor name="Candice Legrand" date={new Date('2021-04-06T19:01:27Z')} />
          </Box>
        </WrapItem>
  
</Wrap>
       
      
       
    </Container>
  )
}

export default ArticleList