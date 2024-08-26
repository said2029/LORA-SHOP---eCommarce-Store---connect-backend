"use server";

const Get_SettingSore = async () => {
  try {
    const result = await fetch(
      process.env.NEXT_PUBLIC_BACKEND_URL + "/getStoreSetting",
      {
        cache: "no-store",
      }
    );
    const data = await result.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export { Get_SettingSore };
