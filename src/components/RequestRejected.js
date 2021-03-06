import * as React from "react"

import { Box, Text } from "cosmo"

function RequestRejected(props) {
  const { reason } = props
  return (
    <Box backgroundColor="grays.1" padding="md">
      <Text fontWeight="semibold" textAlign="center">
        🛑 Request rejected
      </Text>
      <Box marginBottom="sm" />
      Are your auth credentials correct?
      <Box marginBottom="sm" />
      <Text fontSize="xs" fontFamily="mono">
        {reason}
      </Text>
    </Box>
  )
}

export default RequestRejected
