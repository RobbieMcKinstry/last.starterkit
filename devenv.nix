{
  pkgs,
  lib,
  config,
  inputs,
  ...
}:
let
  postgres_user = "postgres";
  postgres_password = "starterkit";
  postgres_host = "127.0.0.1";
  postgres_database = "starterkit";
  postgres_port = 5432;
in
{
  # https://devenv.sh/basics/
  env = {
    POSTGRES_USER = postgres_user;
    POSTGRES_PASSWORD = postgres_password;
    POSTGRES_HOST = postgres_host;
    POSTGRES_DATABASE = postgres_database;
    POSTGRES_PORT = postgres_port;
    DATABASE_URL = "postgresql://${postgres_user}:${postgres_password}@${postgres_host}:${toString postgres_port}/${postgres_database}";
  };

  # https://devenv.sh/packages/
  packages = [
  ];

  # https://devenv.sh/languages/
  languages.typescript.enable = true;
  languages.javascript = {
    enable = true;
    pnpm.enable = true;
  };

  # https://devenv.sh/processes/
  # processes.cargo-watch.exec = "cargo-watch";

  # https://devenv.sh/services/
  services.postgres = {
    enable = true;
    package = pkgs.postgresql_18;
    listen_addresses = postgres_host;
    # NB: Having a lot of trouble connecting to the database with $DATABASE_URL.
    # However, this command works: psql -U engineer -d lastengineer
    initialDatabases = [
      {
        user = postgres_user;
        pass = postgres_password;
        name = postgres_database;
      }
    ];
  };

  # https://devenv.sh/scripts/
  # scripts.hello.exec = ''
  #   echo hello from $GREET
  # '';

  enterShell = '''';

  # https://devenv.sh/tasks/
  # tasks = {
  #   "myproj:setup".exec = "mytool build";
  #   "devenv:enterShell".after = [ "myproj:setup" ];
  # };

  # https://devenv.sh/tests/
  enterTest = '''';

  # https://devenv.sh/git-hooks/
  git-hooks.hooks = {
    shellcheck.enable = true;
    prettier.enable = true;
  };

  # See full reference at https://devenv.sh/reference/options/
}
