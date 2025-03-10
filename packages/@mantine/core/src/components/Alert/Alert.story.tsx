import React from 'react';
import { MantineThemeProvider } from '../../core';
import { Alert } from './Alert';

export default { title: 'Alert' };

export function Variants() {
  return (
    <div style={{ maxWidth: 500, margin: 'auto', padding: 40 }}>
      <Alert title="Bummer!" color="red" variant="light" withCloseButton>
        Something terrible happened! You made a mistake and there is no going back, your data was
        lost forever!
      </Alert>
      <Alert withCloseButton title="Bummer!" color="red" variant="filled" mt="xl">
        Something terrible happened! You made a mistake and there is no going back, your data was
        lost forever!
      </Alert>
      <Alert withCloseButton title="Bummer!" color="red" variant="outline" mt="xl">
        Something terrible happened! You made a mistake and there is no going back, your data was
        lost forever!
      </Alert>

      <Alert withCloseButton title="Bummer!" color="red" variant="default" mt="xl">
        Something terrible happened! You made a mistake and there is no going back, your data was
        lost forever!
      </Alert>

      <Alert withCloseButton title="Bummer!" color="red" variant="transparent" mt="xl">
        Something terrible happened! You made a mistake and there is no going back, your data was
        lost forever!
      </Alert>
    </div>
  );
}

export function Unstyled() {
  return (
    <div style={{ maxWidth: 500, margin: 'auto', padding: 40 }}>
      <Alert title="Bummer!" color="red" variant="light" withCloseButton unstyled>
        Something terrible happened! You made a mistake and there is no going back, your data was
        lost forever!
      </Alert>
    </div>
  );
}

export function WithoutDescription() {
  return (
    <div style={{ maxWidth: 500, margin: 'auto', padding: 40 }}>
      <Alert icon="$" title="Bummer!" color="red" variant="light" withCloseButton></Alert>
    </div>
  );
}

export function CSSVariables() {
  return (
    <MantineThemeProvider
      theme={{
        components: {
          Alert: Alert.extend({
            defaultProps: {
              // color: 'red',
            },
          }),
        },
      }}
    >
      <div style={{ maxWidth: 500, margin: 'auto', padding: 40 }}>
        <Alert title="Bummer!" withCloseButton>
          Something terrible happened! You made a mistake and there is no going back, your data was
          lost forever!
        </Alert>
      </div>
    </MantineThemeProvider>
  );
}
