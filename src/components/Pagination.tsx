import { Box, Button, Stack } from '@chakra-ui/react'
import React from 'react'

export const Pagination = () => {
    return (
        <Stack
            direction="row"
            mt="8"
            justify="space-between"
            spacing="6"
            alignItems="center"
        >
            <Box>
                <strong>0</strong>- <strong>10 </strong>de <strong>100</strong>
            </Box>
            <Stack direction="row" spacing="2">
                <Button
                    size="sm"
                    fontSize="xs"
                    width="4"
                    colorScheme="pink"
                    disabled
                    _disabled={{
                        bgColor: 'pink.500',
                        cursor: 'default'
                    }}
                >
                    1
                </Button>
                <Button
                    size="sm"
                    fontSize="xs"
                    width="4"
                    bgColor="gray.700"
                    _hover={{
                        bgColor: 'gray.500'
                    }}

                >
                    2
                </Button>
                <Button
                    size="sm"
                    fontSize="xs"
                    width="4"
                    bgColor="gray.700"
                    _hover={{
                        bgColor: 'gray.500'
                    }}

                >
                    3
                </Button>
            </Stack>
        </Stack>
    )
}
