import mongoose from 'mongoose';

const classPricesSchema = new mongoose.Schema(
  {
    data: {
      type: Map,
      of: [Number],
      required: true
    }
  },
  { strict: false }
);

const ClassPrices = mongoose.models.ClassPrices || mongoose.model('ClassPrices', classPricesSchema);

export default ClassPrices;
