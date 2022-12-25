    //  JS File //
     var procductName, unitPrice, quantity, row, cell, a, b, c;
      var grandtotal = 0;
      var finalamount = 0;

      function Addtocart() {
        procductName = document.getElementById("prodName").value;
        unitPrice = parseInt(document.getElementById("unitPrice").value);
        quantity = parseInt(document.getElementById("quantity").value);

        var invoice = document.getElementById("Invoice");
        row = invoice.insertRow();
        cell = row.insertCell();
        cell.innerHTML = procductName;
        cell = row.insertCell();
        cell.innerHTML = unitPrice;
        cell = row.insertCell();
        cell.innerHTML = quantity;
        cell = row.insertCell();
        cell.innerHTML = unitPrice * quantity;
        grandtotal += quantity * unitPrice;
        a = parseInt(grandtotal);
        // By Defult VAT Value
        // b = a + a * 0.02;
        // Auto Add VAT Value
        b = a + (a * parseFloat(document.getElementById("vat").value)) / 100;
        // Auto Add DISCOUNT Value
        finalamount =
          b - (b * parseFloat(document.getElementById("Disc").value)) / 100;
        c = parseInt(finalamount);
        document.getElementById("grandtotal").value = b;
        document.getElementById("finalamount").value = c;
      }
      function GenIn() {
        // USe Both As per Required
        confirm("Are You Confirmed To Generate It?");
        // window.open("Submit.html");
      }