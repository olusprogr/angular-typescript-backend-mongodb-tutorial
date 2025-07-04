import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'kp';

    code = `
  const express = require('express')
  const app = express()
  const port = 3000

  app.get('/', (req, res) => {
    res.send('Hello World!')
  })

  app.listen(port, () => {
    console.log(\`Example app listening on port \${port}\`)
  })`;

    backendCode = `
const express = require('express');
const app = express();
const port = 3000;
const { MongoClient, ServerApiVersion } = require('mongodb');

const uri = "YOUR_MONGODB_CONNECTION_STRING";

const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
});`;
}
