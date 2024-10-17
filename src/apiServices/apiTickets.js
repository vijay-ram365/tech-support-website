import supabase from "./supabase";

export async function getTickets() {
  const { data, error } = await supabase.from("ticket").select("*");

  if (error) {
    console.error(error);
    throw new Error("Support tickets could not be loaded");
  }

  return data;
}
