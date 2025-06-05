export const range = (start: number, end: number, step = 1) => {
   let output = [];

   if (typeof end === 'undefined') {
      end = start;
      start = 0;
   }

   for (let i = start; i < end; i += step) {
      output.push(i);
   }

   return output;
};

export const random = (min: number, max: number) =>
   Math.floor(Math.random() * (max - min)) + min;

export const getPagination = (page: number, size: number) => {
   const limit = size ? +size : 3;
   const offset = page ? page * limit : 0;
   return { limit, offset };
};
