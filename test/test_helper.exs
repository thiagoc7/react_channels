ExUnit.start

Mix.Task.run "ecto.create", ~w(-r ReactChannels.Repo --quiet)
Mix.Task.run "ecto.migrate", ~w(-r ReactChannels.Repo --quiet)
Ecto.Adapters.SQL.begin_test_transaction(ReactChannels.Repo)

