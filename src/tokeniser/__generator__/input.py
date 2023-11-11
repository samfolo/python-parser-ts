f"""I weigh
{weight.to_kg() * 7} kilograms as

\nof {
  date.now().minus(hours=2).to_iso_string()
}"""