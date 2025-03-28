import React from 'react';

import {Heading} from "@radix-ui/themes";
import { TabNav } from "@radix-ui/themes";

export default function Header() {
    return (
        <div>
            <Heading as="h1">
                Phaedra's Portfolio
            </Heading>
            <TabNav.Root>
                <TabNav.Link href="#" active>
                    Account
                </TabNav.Link>
                <TabNav.Link href="#">Documents</TabNav.Link>
                <TabNav.Link href="#">Settings</TabNav.Link>
            </TabNav.Root>
        </div>
    );
}