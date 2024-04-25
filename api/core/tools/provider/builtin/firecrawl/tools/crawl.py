from firecrawl import FirecrawlApp
from typing import Any, Union

from core.tools.entities.tool_entities import ToolInvokeMessage
from core.tools.tool.builtin_tool import BuiltinTool


class CrawlTool(BuiltinTool):
    def _invoke(self, user_id: str, tool_parameters: dict[str, Any]) -> Union[ToolInvokeMessage, list[ToolInvokeMessage]]:
        url = "https://api.firecrawl.dev/v0/crawl"

        # innitialize the app object with the api key
        app = FirecrawlApp(api_key=self.runtime.credentials['firecrawl_api_key'])

        # crawl the url
        crawl_result = app.crawl_url(url, params=tool_parameters, wait_until_done=True, timeout=5)
        
        # reformat crawl result
        crawl_output = f"**Crawl Result**\n\n"
        for result in crawl_result:
            crawl_output += f"**Title:** {result['metadata']['title']}\n"
            crawl_output += f"**Description:** {result['metadata']['description']}\n"
            crawl_output += f"**URL:** {result['metadata']['ogUrl']}\n\n"
            crawl_output += f"**Web Content:**\n{result['markdown']}\n\n"
            crawl_output += f"---\n\n"


        return self.create_text_message(crawl_output)