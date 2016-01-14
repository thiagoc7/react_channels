defmodule ReactChannels.TaskView do
  use ReactChannels.Web, :view

  def render("task.json", %{task: t}) do
    %{
      id: t.id,
      date: t.date,
      description: t.description
    }
  end
end
