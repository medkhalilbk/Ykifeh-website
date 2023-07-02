import { Box, Button, useColorMode } from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

function TopBar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const ColorModeIcon = colorMode === 'light' ? SunIcon : MoonIcon;

  return (
    <Box width="100%" padding="1" backgroundColor="transparent">
      <Box
        maxWidth="container.xl"
        margin="auto"
        display="flex"
        justifyContent="flex-end"
        marginTop={'5'}
      >
        <Button
        backgroundColor={'transparent'}
          _hover={{ backgroundColor: 'transparent' }}
          aria-label="ui theme"
          leftIcon={<ColorModeIcon />}
          onClick={toggleColorMode}
          size="s"
          borderRadius="sm"
        >{colorMode === 'light' ? 'Dark' : 'Light'}</Button>
      </Box>
    </Box>
  );
}

export default TopBar;
