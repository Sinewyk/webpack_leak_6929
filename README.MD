# Install

`yarn`

# See it in action

`yarn test`

# I'm lazy, how do I investigate why it breaks ?

`GENERATE_HEAP_DUMP=true HEAPDUMP_INTERVAL=3000 yarn test`

Then load the heapdumps in chrome dev tools and you can compare them

## Tweaks

Edit the `max_old_space_size` in `package.json` to have more or less time before the out of memory.

## Where can I help

https://github.com/webpack/webpack/issues/6929
