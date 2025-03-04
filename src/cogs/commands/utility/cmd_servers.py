from pickle import TRUE
from typing import List
from discord import ApplicationContext
from discord.commands.options import Option
from cogs import BaseCog


def cog_creator(_servers: List[int]):
    class Servers(BaseCog):

        @BaseCog.cslash_command(
            description="Lists all the servers the bot is in",
            guild_ids=_servers
        )
        async def servers(
                self,
                ctx: ApplicationContext,
                hide: Option(bool) = True
        ):
            if not (ctx.user.id in (self.bot.config.OWNERS)):
                await ctx.respond(
                    "Sorry, you cannot use this command.",
                    ephemeral=True
                    )
                return

            guilds = "\n".join(f"**{guild.name},** id: **{guild.id}**," for guild in self.bot.guilds)
            """
            ***Testserver1***
            ***Testserver2***
            """
            await ctx.respond(
                f"I'm in these servers: \n{guilds}",
                ephemeral=hide
                )

    return Servers
