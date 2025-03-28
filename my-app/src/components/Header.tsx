import React from 'react';

import { Heading,Flex } from "@radix-ui/themes";

export default function Header() {
    return (
        <div>
            <Flex direction="col" gap="5" justify="center" py="5">
                <Heading as="h1">
                    Phaedra's Portfolio
                </Heading>
            </Flex>
        </div>
    );
}