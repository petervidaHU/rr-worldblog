import { Container, Title, Text } from "@mantine/core";

// Use plain types for params
export function meta({ params }: { params: Record<string, string> }) {
  const { country, entity, instance } = params;
  return [
    { title: `${instance} | ${entity} in ${country}` },
    { name: "description", content: `Learn about ${instance}, a ${entity} in ${country}.` },
  ];
}

export default function EntityInstance({ params }: { params: Record<string, string> }) {
  const { country, entity, instance } = params;
  return (
    <Container>
      <Title order={1} mb="md">{instance}</Title>
      <Text mb="sm" c="dimmed">
        {entity.replace(/-/g, ' ')} in {country.charAt(0).toUpperCase() + country.slice(1)}
      </Text>
      <Text>
        This is a SEO-friendly page for the {entity.replace(/-/g, ' ')} <b>{instance}</b> in <b>{country}</b>.
      </Text>
    </Container>
  );
}
