from os import environ, listdir, system

def build():
  # Checking and getting NPM path.
  npmPath = list(filter(lambda x: x.__contains__('npm'), environ['PATH'].split(';')))
  if len(npmPath) == 0:
    return
  # Listing and filtering commands in NPM path
  files = listdir(npmPath[0])
  commands = list(filter(lambda x: not x.__contains__('.'), files))
  if len(commands) == 0:
    return
  # Choosing installation command
  shellCommand = 'yarn' if commands.__contains__('yarn') else 'npm i'
  # Installing modules
  system(shellCommand)

build()