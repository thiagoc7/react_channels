defmodule ReactChannels.Task do
  use ReactChannels.Web, :model

  schema "tasks" do
    field :date, :string
    field :description, :string

    timestamps
  end

  @required_fields ~w(date description)
  @optional_fields ~w()

  @doc """
  Creates a changeset based on the `model` and `params`.

  If no params are provided, an invalid changeset is returned
  with no validation performed.
  """
  def changeset(model, params \\ :empty) do
    model
    |> cast(params, @required_fields, @optional_fields)
  end
end
