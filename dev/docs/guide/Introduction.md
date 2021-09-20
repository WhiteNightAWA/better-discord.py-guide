---
title: Introduction

---

This is the guide for `discord.py`, 
and `discord.py` is a library for Python to aid in creating applications that utilise the Discord API.

:::info links
- [Discord.py Documentation](https://discordpy.readthedocs.io/en/stable/index.html)
- [Discord.py Discord Server](https://discord.gg/r3sSKJJ)
- [Discord.py GitHub](https://github.com/Rapptz/discord.py)
- [Discord API Discord Server](https://discord.gg/discord-api)
- [Discord Developers Portal](https://discord.com/developers/applications)
:::

## Prerequisites
discord.py works with Python 3.5.3 or higher. Support for earlier versions of Python is not provided. Python 2.7 or lowe
r is not supported. Python 3.4 or lower is not supported due to one of the dependencies (
[aiohttp](https://docs.aiohttp.org/en/stable/index.html)) not supporting Python 3.4.

## Installing Discord.py
### From Pypi
<CodeGroup>
  <CodeGroupItem title="Windows">

```shell
py -3 -m pip install -U discord.py
```

  </CodeGroupItem>

  <CodeGroupItem title="Linux/macOS">

```shell
python3 -m pip install -U discord.py
```

  </CodeGroupItem>
</CodeGroup>

### From GitHub
<CodeGroup>
  <CodeGroupItem title="Windows">

```shell
git clone https://github.com/Rapptz/discord.py --branch v1.7.3
cd discord.py
py -3 -m pip install -U ./
```

  </CodeGroupItem>

  <CodeGroupItem title="Linux/macOS">

```shell
git clone https://github.com/Rapptz/discord.py --branch v1.7.3
cd discord.py
python3 -m pip install -U ./
```

  </CodeGroupItem>
</CodeGroup>


