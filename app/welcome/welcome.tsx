import { Container, Paper, Title, Text, Group, Button, Stack, useMantineColorScheme } from '@mantine/core';
import logoDark from "./logo-dark.svg";
import logoLight from "./logo-light.svg";

export function Welcome() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const logo = colorScheme === 'dark' ? logoDark : logoLight;

  return (
    <Container size="sm" py="xl">
      <Stack align="center" gap="xl">
        <img src={logo} alt="React Router" style={{ width: 220, marginBottom: 16 }} />
        <Paper shadow="md" p="lg" radius="md" withBorder>
          <Title order={2} mb="sm" style={{ textAlign: 'center' }}>Welcome to rr-worldblog</Title>
          <Text mb="md" style={{ textAlign: 'center' }}>
            This blog uses <b>React Router v7.6</b> (Remix-style), <b>Mantine UI v8</b>, and is ready for SSG/SSR and strong SEO.
          </Text>
          <Group justify="center" mt="md">
            <Button component="a" href="https://reactrouter.com/docs" target="_blank" variant="light">React Router Docs</Button>
            <Button component="a" href="https://mantine.dev/docs/getting-started/" target="_blank" color="grape" variant="light">Mantine Docs</Button>
            <Button onClick={toggleColorScheme} variant="outline" color="gray">
              Toggle {colorScheme === 'dark' ? 'Light' : 'Dark'} Mode
            </Button>
          </Group>
        </Paper>
      </Stack>
    </Container>
  );
}
