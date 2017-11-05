# storychain

Create a chain of stories made by you and others.

## Stack
- [Preact](https://github.com/developit/preact)

## Routes 

### Edit

Open web view to create a new story:

```
/edit
```

Open web view to edit story:

```
/edit?id=<hash>
```

If the id is not the last gist (`next` exists), then redirect to last gist.

| Name | Type | Description |
| --- | --- | --- |
| first | `string` | **Required.** The url to the first gist. |
| content |  `string` | **Required.** The gist content. |
| prev | `string|null` | The url to the previous gist. |
| next | `string|null` | The url to the next gist. |
| author | `string|null` | The author of the gist. |

```
/meta?id=<hash>
```

| Name | Type | Description |
| --- | --- | --- |
| first | `string` | **Required.** The url to the first gist. |
| last | `string` | **Required.** The url to the last gist. |

### Read

Open web view to read stories:

```
/read?id=<hash>
```

See gist schema.

### Home

The index page.

## Views

- Edit
  - ContentList
    - Content
  - Editor 

- Read
  - ContentList
    - Content
  - ScrollWatcher

## Components

### `<ContentList>`

Renders a list of `<Content>`.

### `<Content>`

Renders Markdown content as HTML.

|Property|Description|Type|Default|
| :-: | :-: | :-: | :-: |
| children | The content to render. | String | - |

### `<Editor>`

Editor to create new content.

### `<ScrollWatcher>`

|Property|Description|Type|Default|
| :-: | :-: | :-: | :-: |
| handleScrollBottom | fire event when hitting bottom of window| Function | `noop` | 
| offset | offset from bottom to trigger handler | Number | 250 |

## License

MIT
