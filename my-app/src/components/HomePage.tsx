import React from 'react';

import { Button, Avatar, Card, Flex, Text, Box } from "@radix-ui/themes";
import { LinkedInLogoIcon, } from "@radix-ui/react-icons"

export default function Home() {
    return (
        <Flex direction="column">
            <Flex direction="column">
                {/* Hero Section */}
                <Flex direction="column" justify="center">
                    <Flex gap="3" direction="row" justify="center" align="center">
                        <Avatar size="6" src="../logo.svg" />

                        <h1>Phaedra Buzek</h1>
                    </Flex>
                    <p>Software Developer | Cat Enthusiast</p>
                    <Flex justify="center">
                        <Button variant="outline" asChild>
                            <a href="https://www.linkedin.com/in/phaedra-buzek-18a902200/"><LinkedInLogoIcon /> LinkedIn</a>
                        </Button>

                    </Flex>
                </Flex>

                {/* About Section */}
                <Flex direction="column" justify="center">
                    <h2>About Me</h2>
                    <Flex gap="3" direction="row" justify="center">
                        <Box maxWidth="500px">
                            <Card>
                                <Flex gap="1" direction="column">
                                    <Text>
                                        Phaedra is currently pursuing a Software Development Advanced Diploma at Mohawk College, where she has consistently made the Dean's Honour List.

                                        Phaedra brings a diverse skill set to any team, including proficiency in jQuery, Python, Artificial intelligence, and Object-Oriented Programming.

                                        Her experiences in education, leadership, and various industries equip her with a unique blend of technical and interpersonal skills.
                                    </Text>
                                </Flex>
                            </Card>
                        </Box>
                    </Flex>
                </Flex>
            </Flex>

            {/* Projects Section */}
            <Flex direction="column">
                <h2>Projects</h2>
                <Flex gap="3" direction="row" justify="center">
                    <Card>
                        <Flex gap="1" direction="column">
                            <h3>StudySync</h3>
                            <p>A productivity app for students to track tasks and study groups.</p>
                            <Button variant="secondary" asChild disabled>
                                <p>Coming soon...</p>
                            </Button>
                        </Flex>
                    </Card>

                    <Card>
                        <Flex gap="1" direction="column">
                            <h3>Dog Breeds App</h3>
                            <p>A React Native app showcasing dog breeds via an API.</p>
                            <Button variant="link" asChild>
                                <a>View Project</a>
                            </Button>
                        </Flex>
                    </Card>
                </Flex>
            </Flex>
        </Flex>
    );
}