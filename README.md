# doce

doce - is a minimalistic live templating tool that runs Handlebars based templating engine and watches for input file changes

# install

```
npm install doce -g
```

# configuration

Create a file named `doce.conf.json` specifying:

- `template` - main template file
- `partials` - a glob to match partials 
- `output` - output file name

configuration is passed to all the templates - feel free to add any constants that need to be common in all templates

here's an example configuration

```json
{
  "partials": "**/p*.yaml",
  "template": "swagger.yaml.hbs",
  "output": "swagger.yaml",

  "constants": {
    "A": 123
  }
}
```

# run

Navigate to the directory with `doce.cong.json` and run:

```
doce
```

To run one time templating use:

```
doce once
```

`Ctrl` + `C` to stop the **doce** process


# license

It's MIT - see `LICENSE.md` for more details

