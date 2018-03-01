Import required **Bootstrap Styled** components within `src/App.js` file or your custom component files:

      `import { Button, BootstrapProvider } from 'bootstrap-styled';`

Bootstrap Styled does not include Bootstrap CSS, instead it include a BootstrapProvider:

      `<BootstrapProvider theme={{ '$brand-danger': 'red' }}>
        <Button color="danger">Do not click!</Button>
      </BootstrapProvider>`

Now you are ready to use the imported Bootstrap Styled components within your component hierarchy defined in the render method.
