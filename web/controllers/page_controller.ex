defmodule ReactChannels.PageController do
  use ReactChannels.Web, :controller

  def index(conn, _params) do
    render conn, "index.html"
  end
end
