import Image from "next/image";
import { Badge, Box, Container, Paper, Stack, Text } from "@mantine/core";

export default function Home() {
  return (
    <Box
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        background:
          "radial-gradient(circle at 50% 0%, var(--mantine-color-indigo-9) 0%, var(--mantine-color-dark-9) 55%)",
      }}
    >
      <Container size="sm">
        <Stack align="center" gap="xl">
          <Badge size="lg" variant="light" color="indigo" radius="sm">
            Coming Soon
          </Badge>

          <Paper radius="lg" p="xs" shadow="sm" w={{ base: 260, sm: 340 }}>
            <Image
              src="/brisqpay-logo-horizontal.png"
              alt="Brisqpay"
              width={824}
              height={291}
              style={{ width: "100%", height: "auto" }}
              priority
            />
          </Paper>

          <Stack align="center" gap="xs">
            <Text ta="center" fz={{ base: "lg", sm: "xl" }} fw={500} c="gray.1">
              Fast, reliable payment infrastructure built for fintechs and
              businesses.
            </Text>
            <Text
              ta="center"
              fz={{ base: "md", sm: "lg" }}
              c="dimmed"
              maw={560}
            >
              API-driven EFT and Interac e-Transfer rails. Powering the next
              generation of Canadian payments. 🇨🇦
            </Text>
          </Stack>

          <Text ta="center" fz="sm" c="dimmed" mt="xl">
            Powered by Ruona Technologies Inc.
          </Text>
        </Stack>
      </Container>
    </Box>
  );
}
